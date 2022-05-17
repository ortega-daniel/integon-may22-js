$(() => {
  $('#selected-plays > li').addClass('horizontal');

  $('#selected-plays li:not(.horizontal)').addClass('sub-level');

  $('#selected-plays li:not(.sub-level)').addClass('big-letter');

  $('a[href^="mailto:"]').addClass('mailto');

  $('a[href$=".pdf"]').addClass('pdflink');

  $('a[href^="http"][href*="henry"]').addClass('henrylink');

  //$('tr:nth-child(odd)').addClass('alt');
  $('tr').filter(':even').addClass('alt');

  $('a')
  .filter((i, a) =>
  a.hostname && a.hostname !== location.hostname
  ).addClass('external');
  
  //$('td:contains(Henry)').addClass('highlight');

  //$('td:contains(Henry)').nextAll().addBack().addClass('highlight');

  /* $('td:contains(1606)').prev().prev().addClass('highlight');

  $('td:contains(Henry)').parent().children().addClass("highlight") */

  $('td:contains(Henry)') // Find every cell containing "Henry"
  .parent() // Select its parent
  .find('td:eq(1)') // Find the 2nd descendant cell
  .addClass('highlight') // Add the "highlight" class
  .end() // Return to the parent of the cell containing "Henry"
  .find('td:eq(2)') // Find the 3rd descendant cell
  .addClass('highlight'); // Add the "highlight" class

  const eachText = [];

  $('td').each((i, td) => {
    if (td.textContent.startsWith('H')) {
    eachText.push(`${i} - ${td.textContent}`);
    }
  });

  console.log('each', eachText);

  // Ejercicio pag. 53
  // 1
  $('#selected-plays > li > ul li').addClass('special');
  // 2
  $("tr").find("td:eq(2)").addClass("year");
  // 3
  $("tr:contains(Tragedy)").first().addClass('special');
  // 4
  $("li:has(> a)").nextAll().addClass("afterlink");
  // 5
  $('a[href$=".pdf"]').closest("ul").addClass("tragedy");
});
