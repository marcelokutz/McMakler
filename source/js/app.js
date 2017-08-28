//$.getJSON("dist/json/advertisements.json", function(json) {
$.getJSON("dist/json/advertisements.json", function(json) {
  var elements = json.data.slice(0, 10);
  $.each(elements, function (index, value) {
      //console.log(value._id);

      var advTitle = value.title;
      var advNumber = value.realestateSummary.address['number'];
      var advStreet = value.realestateSummary.address['street'];
      var advCity = value.realestateSummary.address['city'];
      var advRent = value.advertisementPrice.baseRent;
      var advRooms = value.realestateSummary.numberOfRooms;
      var advSpace = parseFloat(value.realestateSummary.space).toFixed(2);
      var advImg = value.advertisementAssets[0].advertisementThumbnails.inventory_m.url;

      $('#advertisements').append('\
          <div class="properties__item"> \
              <figure> \
                  <h4 class="properties__category">Mieten</h4> \
                  <a href="#" title="' + advTitle + '"> \
                      <img src="' + advImg + '" alt="' + advTitle + '"> \
                  </a> \
              </figure> \
              <div class="properties__description"> \
                  <h2>' + advTitle + '</h2> \
                  <h3>' + advNumber + ' ' + advStreet + ' / ' + advCity + ' </h3> \
                  <p class="properties__info"> \
                      <span class="properties__size">' + advRooms + ' Zimmer <span class="sep">|</span> ab ' + advSpace + 'm²</span> \
                      <span class="properties__price">' + advRent + ' €</span> \
                  </p> \
              </div> \
          </div> \
      ');

  });
});