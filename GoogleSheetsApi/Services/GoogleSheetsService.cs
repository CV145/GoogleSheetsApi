using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
using Google.Apis.Sheets.v4;
using Google.Apis.Sheets.v4.Data;
using GoogleSheetsApi.Models;

namespace GoogleSheetsApi.Services
{
    public class GoogleSheetsService
    {
        private readonly SheetsService _sheetsService;
        private readonly string _spreadsheetId;

        public GoogleSheetsService(string serviceAccountKeyFilePath, string spreadsheetId)
        {
            var credential = GoogleCredential.FromFile(serviceAccountKeyFilePath)
                .CreateScoped(SheetsService.Scope.Spreadsheets);

            _sheetsService = new SheetsService(new BaseClientService.Initializer
            {
                HttpClientInitializer = credential,
                ApplicationName = "Inventory Manager",
            });

            _spreadsheetId = spreadsheetId;
        }

        // Methods to interact with the sheet (e.g., read, write)
        public List<InventoryItem> GetInventoryItems()
        {
            var range = "Sheet1!A2:C"; // Adjust the range according to your sheet
            var request = _sheetsService.Spreadsheets.Values.Get(_spreadsheetId, range);

            ValueRange response = request.Execute();
            IList<IList<object>> values = response.Values;

            var inventoryItems = new List<InventoryItem>();
            if (values != null && values.Count > 0)
            {
                foreach (var row in values)
                {
                    // Assumes the sheet format is: ItemName | Quantity | Price
                    inventoryItems.Add(new InventoryItem
                    {
                        ItemName = row.Count > 0 ? row[0].ToString() : "",
                        Quantity = row.Count > 1 ? int.Parse(row[1].ToString()) : 0,
                        Price = row.Count > 2 ? decimal.Parse(row[2].ToString()) : 0
                    });
                }
            }

            return inventoryItems;
        }

        public void AddInventoryItem(InventoryItem item)
        {
            var range = "Sheet1!A2:C"; // Adjust the range according to your sheet
            var valueRange = new ValueRange();

            var objectList = new List<object>() { item.ItemName, item.Quantity, item.Price };
            valueRange.Values = new List<IList<object>> { objectList };

            var appendRequest = _sheetsService.Spreadsheets.Values.Append(valueRange, _spreadsheetId, range);
            appendRequest.ValueInputOption = SpreadsheetsResource.ValuesResource.AppendRequest.ValueInputOptionEnum.USERENTERED;

            var response = appendRequest.Execute();
        }
    }
}
