using Microsoft.AspNetCore.Mvc;
using GoogleSheetsApi.Services;
using GoogleSheetsApi.Models;

namespace GoogleSheetsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : Controller
    {
        private readonly GoogleSheetsService _googleSheetsService;

        public InventoryController(GoogleSheetsService googleSheetsService)
        {
            _googleSheetsService = googleSheetsService;
        }

        // GET: api/inventory
        [HttpGet]
        public IActionResult GetInventoryItems()
        {
            var items = _googleSheetsService.GetInventoryItems();
            return Ok(items);
        }

        // POST: api/inventory
        [HttpPost]
        public IActionResult AddInventoryItem([FromBody] InventoryItem item)
        {
            _googleSheetsService.AddInventoryItem(item);
            return Ok();
        }

    }
}
