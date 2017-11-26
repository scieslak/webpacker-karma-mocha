import Application from '../../packs/application'

describe("Application", () => {
  it("should correct name", () => {
    let name = 'webpacker-karma-mocha'
    let app = new Application(name)
    expect(app.name).to.equal(name)
  })
})
