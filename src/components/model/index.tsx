export function Model() {
  return (
    <div>
      <section className="pt-md-11 pt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2 h-[645px] w-[484px]">
              <img
                src="/src/assets/images/profile.jpeg"
                className="img-fluid mw-md-150 mw-lg-130 mb-md-0 aos-init aos-animate mb-6"
                alt="..."
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>
            <div
              className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate"
              data-aos="fade-up"
            >
              <h1 className="display-3 text-md-start text-center">
                Welcome to <span className="text-primary">Landkit</span>. <br />
                Develop anything.
              </h1>

              <p className="lead text-md-start text-body-secondary mb-lg-8 mb-6 text-center">
                Build a beautiful, modern website with flexible Bootstrap
                components built from scratch.
              </p>

              <div className="text-md-start text-center">
                <a
                  href="overview.html"
                  className="btn btn-primary lift me-1 shadow"
                >
                  View all pages{' '}
                  <i className="fe fe-arrow-right d-none d-md-inline ms-3"></i>
                </a>
                <a
                  href="docs/index.html"
                  className="btn btn-primary-subtle lift"
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
