import React from 'react'
import { MDBFooter, MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit'

//import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Footer = () => {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: 'black' }}>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color='light' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color='light' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color='light' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color='light' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color='light' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color='light' floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/Terms' className='text-white'>
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href='/Privacy' className='text-white'>
                    Privacy
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()}
        <br />
        <a className='text-white' href='https://webopsit.com/'>
          WebOpsIT.com
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer
