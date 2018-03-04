const mocha = require('mocha');
const expect = require('expect.js');
const describe = require('mocha').describe;
const it = require('mocha').it;


relations.forEach((e) => {

  describe(e.name, () => {
    describe('general test', () => {
      it('e should be a object', () => {
        expect(e).be.an(Object);
      })
    });

    // chekking for requierd elements
    describe('base elements', () => {

      it('should have a property of id', () => {
        expect(e.id).not.be(undefined)
      });

      it('should have a property of type', () => {
        expect(e.type).not.be(undefined)
      });

      it('should have a property of name', () => {
        expect(e.name).not.be(undefined)
      });

      it('should have a property of forwardPhrase', () => {
        expect(e.forwardPhrase).not.be(undefined)
      });

      it('should have a property of backwardPhrase', () => {
        expect(e.backwardPhrase).not.be(undefined)
      });

      it('should have a property of entity0Type', () => {
        expect(e.entity0Type).not.be(undefined)
      });

      it('should have a property of entity1Type', () => {
        expect(e.entity1Type).not.be(undefined)
      });

      it('should have a property of discription', () => {
        expect(e.discription).not.be(undefined)
      });

      it('should have a property of fields', () => {
        expect(e.fields).not.be(undefined)
      });
    });

    //checking for the types of the elemnts
    describe('base elements types', () => {
      it('type should should be of id ', () => {
        expect(e.id).be.a('number')
      });

      it('type should should be of type ', () => {
        expect(e.type).be.a('string')
      });

      it('name should should be of type ', () => {
        expect(e.name).be.a('string')
      });

      it('forwardPhrase should should be of type forwardPhrase', () => {
        expect(e.forwardPhrase).be.a('string')
      });

      it('backwardPhrase should should be of type backwardPhrase', () => {
        expect(e.backwardPhrase).be.a('string')
      });

      // it('entity0Type should should be of type entity0Type', function () {
      //     expect(e.entity0Type).be.a("string")
      // });

      it('entity1Type should should be of type entity1Type', () => {
        expect(e.entity1Type).be.a('string')
      });

      it('discription should should be of type discription', () => {
        expect(e.discription).be.a('string')
      });

      it('fields should should be of type fields', () => {
        expect(e.fields).be.an(Array)
      });
    });

    //checking the fields
    describe('field check', () => {
      e.fields.forEach((e) => {
        describe(e.name, () => {
          describe('required properies', () => {
            it('should have a name', () => {
              expect(e.name).not.be(undefined);
              expect(e.name).not.eql('');
            });

            it('should have a type', () => {
              expect(e.type).not.be(undefined);
              expect(e.type).not.eql('');
            });

            it('should have a required', () => {
              expect(e.required).not.be(undefined);
            });

            it('should have a amount', () => {
              expect(e.amount).not.be(undefined);
            });
          });

          describe('required properties type check', () => {
            it('name should be a string', () => {
              expect(e.name).be.a('string')
            });

            it('type should be a string', () => {
              expect(e.name).be.a('string')
            });

            it('required should be a boolean', () => {
              expect(e.required).be.a('boolean')
            });

            it('amount should be a number', () => {
              expect(e.amount).be.a('number')
            });
          });

          describe('other field tests', () => {
            it('amount should not be zero', () => {
              expect(e.amount).not.be.eql(0);
            });

            it('amount should not be lower than -1', () => {
              expect(e.amount).not.be.lessThan(-1)
            });
          })
        })
      })
    });

    //checking type specific things
    switch (e.type) {
      case relType.oneToOne:
        describe('oneToOne specific', () => {
          it('should have a text in forwardPhrase and backwardPhrase', () => {
            expect(e.forwardPhrase).not.to.eql('');
            expect(e.backwardPhrase).not.to.eql('');

          });
        });
        break;
      case relType.self:
        describe('self specific', () => {
          it('should have a text in forwardPhrase but not in backwardPhrase', () => {
            expect(e.forwardPhrase).not.to.eql('');
            expect(e.backwardPhrase).to.eql('');

          });

          it('should have entity1Type of none', () => {
            expect(e.entity1Type).to.eql(types.none);
          });
        });
        break;
      case relType.external:
        describe('external specific', () => {
          it('should have a property of regex', () => {
            expect(e.regex).not.be(undefined);
            expect(e.regex).be.a('string')

          });

          it('should have entity1Type of none', () => {
            expect(e.entity1Type).to.eql(types.none);
          });
        });
        break;
    }
  });
});

it('should not have dupicate ids');

after(() => {
  require('./build');
});
