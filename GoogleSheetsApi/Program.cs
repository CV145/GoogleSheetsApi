using Google.Apis.Sheets.v4;
using GoogleSheetsApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSingleton<SheetsService>(); // Google Sheets Service

builder.Services.AddScoped<GoogleSheetsService>(sp => {
    var configuration = sp.GetRequiredService<IConfiguration>();
    var serviceAccountKeyFilePath = configuration["GoogleSheets:ServiceAccountKeyFilePath"];
    var spreadsheetId = configuration["GoogleSheets:SpreadsheetId"];

    // Create and return a new instance of GoogleSheetsService
    return new GoogleSheetsService(serviceAccountKeyFilePath, spreadsheetId);
});


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You might want to change this for production scenarios.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
