var Jsonix = require('jsonix').Jsonix;
var SIFAU3 = require('./mappings/SIFAU3').SIFAU3;
var context = new Jsonix.Context([SIFAU3]);

var marshaller = context.createMarshaller();

var doc = marshaller.marshalDocument({
    name: {
        localPart: "StudentPersonal"
    },
    value: {
		refId: "ABC123",
		localId: "123",
		peraonlInfo: {
			familyName: "Pernose",
			givenName: "Scott"
		}
    }
});
