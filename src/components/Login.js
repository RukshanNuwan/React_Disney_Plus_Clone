import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
          <SignUp>Get all there</SignUp>
          <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
            As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
        </CTA>
        <BgImage/>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Content = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  margin-bottom: 10vw;
  padding: 80px 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BgImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;

const CTALogoOne = styled.img`
  min-height: 1px;
  max-width: 600px;
  width: 100%;
  margin-bottom: 12px;
  display: block;
`;

const SignUp = styled.a`
  width: 100%;
  margin-bottom: 12px;
  padding: 16.5px 0;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #0063e5;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
`;

const Description = styled.p`
  margin: 0 0 24px;
  color: hsla(0, 0%, 95.3% 1);
  font-size: 11px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  display: inline-block;
  vertical-align: bottom;
  margin-bottom: 20px;
  max-width: 600px;
  width: 100%;
`;

export default Login;
