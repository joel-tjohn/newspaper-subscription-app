import React from 'react'
import Title from './Title'
import Navbar from './Navbar'

const ViewSubscriber = () => {
  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <Title />
            <Navbar/>

            <h4 class="display-4" ><u>View Subscriber</u></h4>
            <br /><br />
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Sl No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Pin Code </th>
                  <th scope="col">District</th>
                  <th scope="col">Village Office/ Muncipality</th>
                  <th scope="col">Email ID </th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark Ruth</td>
                  <td>9365683935</td>
                  <td>682745</td>
                  <td>Kottayam</td>
                  <td>Ettumanoor</td>
                  <td>markruth@gmail.com</td>
                  <td>Parakkavu(H),Ettumanoor,Kottayam</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Mathew Jacob</td>
                  <td>9365678541</td>
                  <td>682715</td>
                  <td>Ernakulam</td>
                  <td>Piravom</td>
                  <td>matjac@gmail.com</td>
                  <td>Moolamattathil(H),Piravom,Ernakulam</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry Savier</td>
                  <td>7856683935</td>
                  <td>689545</td>
                  <td>Kottayam</td>
                  <td>Ettumanoor</td>
                  <td>larrysavier@gmail.com</td>
                  <td>Palayil(H),Ettumanoor,Kottayam</td>

                </tr>


                <tr>
                  <th scope="row">4</th>
                  <td>Samkutty Chacko</td>
                  <td>9367849435</td>
                  <td>678745</td>
                  <td>Pathanamthitta</td>
                  <td>Thiruvalla</td>
                  <td>samchacko@gmail.com</td>
                  <td>Parakkavu(H),Thiruvalla,Pathanamthitta</td>

                </tr>

                <tr>
                  <th scope="row">5</th>
                  <td>Shashi Rajan</td>
                  <td>9365683935</td>
                  <td>682745</td>
                  <td>Kottayam</td>
                  <td>Kuryanad</td>
                  <td>shashi@gmail.com</td>
                  <td>PKaithaparambil(H),Kuryanad,Kottayam</td>

                </tr>


                <tr>
                  <th scope="row">6</th>
                  <td>Soman</td>
                  <td>9365683935</td>
                  <td>682745</td>
                  <td>Kollam</td>
                  <td>Punalor</td>
                  <td>soman@gmail.com</td>
                  <td>Thekkeveetil(H),Punalor,Kollam</td>

                </tr>


                <tr>
                  <th scope="row">7</th>
                  <td>Shibu</td>
                  <td>9365683935</td>
                  <td>682745</td>
                  <td>Kollam</td>
                  <td>Anchal</td>
                  <td>shibubiju@gmail.com</td>
                  <td>Ebenezer(H),Anchal,KOllam</td>

                </tr>


                <tr>
                  <th scope="row">8</th>
                  <td>Jaison Solomon</td>
                  <td>9365683935</td>
                  <td>682745</td>
                  <td>Pathanamthitta</td>
                  <td>Adoor</td>
                  <td>solojaison@gmail.com</td>
                  <td>Parakkavu(H),Adoor,Pathanamthitta</td>

                </tr>

                <tr>
                  <th scope="row">9</th>
                  <td>Shameer Abdul</td>
                  <td>9365683935</td>
                  <td>682745</td>
                  <td>Ernakulam</td>
                  <td>Perumbavur</td>
                  <td>shaabduh@gmail.com</td>
                  <td>Poyali(H),Perumbavur,Ernakulam</td>

                </tr>

                <tr>
                  <th scope="row">10</th>
                  <td>Alexander </td>
                  <td>9365683935</td>
                  <td>682745</td>
                  <td>Thiruvananthapuram</td>
                  <td>Kilimanur</td>
                  <td>alexbell@gmail.com</td>
                  <td>Kooranayil(H),Kilumanur,Thiruvanthapuram</td>

                </tr>


              </tbody>
            </table>


          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewSubscriber