import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section``;

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto mt-5">
            <form action="https://formspree.io/f/xyyanear" method="POST">
              <div className="row">
                <div className="col-12 mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="First name"
                  />
                </div>
                <div className="col-12 mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-12 mb-3">
                  <textarea placeholder="Message" form-control></textarea>
                </div>
                <div className="col-12 mb-3">
                  <button type="submit">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
