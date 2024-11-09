const { defineConfig } = require("cypress");
const { generate } = require('mochawesome-report-generator');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Генерація HTML звіту після завершення всіх тестів
      on('after:run', async (results) => {
        const options = {
          files: [
            './mochawesome-report/*.json',
          ],
        };

        try {
          const report = await generate(options);
          console.log('HTML report generated:', report);
        } catch (error) {
          console.error('Error generating mochawesome HTML reports:', error);
        }
      });
    },
    baseUrl: 'https://zt.com.ua',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'mochawesome-report',
      overwrite: true, // перезаписує існуючі звіти
      html: true,
      json: false, // не створює JSON звіти
    }
  },
});

