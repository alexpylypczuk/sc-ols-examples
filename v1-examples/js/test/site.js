const expect = require('expect.js');
const config = require('../src/config.js');
const site = require('../src/site.js');
const url = require('url');

describe('Site', function () {
    this.timeout(5000);

    describe('retrieveEmployeeByEmployeeAlias', function() {
        it('should be able to retrieve employee', function (done) {
            site.retrieveEmployeeByEmployeeAlias('Katie', function (err, result) {
                if (err) {
                    done(err);
                    return;
                }

                expect(result.status).to.eql(200);
                expect(result.content.employees).to.not.be(undefined);
                expect(result.content.employees).to.be.an('array');
                expect(result.content.employees).to.not.be.empty();
                
                done();
            })
        })
    });

    describe('retrieveSiteDetails()', function () {
        it('should be able to retrieve site details', function (done) {
            site.retrieveSiteDetails(function (err, result) {
                if (err) {
                    done(err);
                    return;
                }

                expect(result.status).to.eql(200);
                expect(result.content).to.not.be(undefined);
                expect(result.content).to.be.an('object');
                expect(result.content.href).to.not.be(undefined);
                expect(result.content.href).to.be.an('string');
                expect(result.content.href).to.eql(url.resolve(config.apiUri, 'site/' + config.siteId))

                done();
            })
        })
    });

    describe('retrieveServiceCategories()', function () {
        it('should be able to retrieve service categories', function (done) {
            site.retrieveServiceCategories(function (err, result) {
                if (err) {
                    done(err);
                    return;
                }

                
                expect(result.status).to.eql(200);
                expect(result.content.service_categories).to.not.be(undefined);
                expect(result.content.service_categories).to.be.an('array');
                expect(result.content.service_categories).to.not.be.empty();

                done();
            })
        })
    });
    
    describe('retrieveServicesByServiceCategoryName()', function () {
        it('should be able to retrieve service categories', function (done) {
            site.retrieveServicesByServiceCategoryName('Hair Styling', function (err, result) {
                if (err) {
                    done(err);
                    return;
                }

                expect(result.status).to.eql(200);
                expect(result.content.services).to.not.be(undefined);
                expect(result.content.services).to.be.an('array');
                expect(result.content.services).to.not.be.empty();

                done();
            })
        })
    });
    
    describe('retrieveServicesByServiceName()', function () {
        it('should be able to retrieve by service', function (done) {
            site.retrieveServicesByServiceName('Blowdry', function (err, result) {
                if (err) {
                    done(err);
                    return;
                }

                expect(result.status).to.eql(200);
                expect(result.content.services).to.not.be(undefined);
                expect(result.content.services).to.be.an('array');
                expect(result.content.services).to.not.be.empty();

                done();
            })
        })
    });

    
    describe('retrieveServiceEmployeePricing()', function () {
        it('should be able to retrieve employee pricing by service.', function (done) {
            site.retrieveServiceEmployeePricing('Blowdry', function (err, result) {
                if (err) {
                    done(err);
                    return;
                }

                expect(result.status).to.eql(200);
                expect(result.content.employees).to.not.be(undefined);
                expect(result.content.employees).to.be.an('array');
                expect(result.content.employees).to.not.be.empty();

                done();
            })
        })
    });

    describe('retrieveEmployeeServicePricing', function() {
        it('should be able to retrieve service pricing by employee', function (done) {
            site.retrieveEmployeeServicePricing('Katie', function (err, result) {
                if (err) {
                    done(err);
                    return;
                }

                expect(result.status).to.eql(200);
                expect(result.content.services).to.not.be(undefined);
                expect(result.content.services).to.be.an('array');
                expect(result.content.services).to.not.be.empty();

                done();
            })
        })
    });
});