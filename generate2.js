var Jsonix = require('jsonix').Jsonix;
var EdFi2Core = require('./mappings/EdFi2Core').EdFi2Corex;
var context = new Jsonix.Context([EdFi2Core]);

var marshaller = context.createMarshaller();

var doc = marshaller.marshalDocument({
    name: {
        localPart: "Student"
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
