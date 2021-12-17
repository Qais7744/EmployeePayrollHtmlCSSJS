window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const innerHtml =   `
    <tr>
    <th>Image</th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Action</th>
  </tr>
  <tr>
    <td><img class="profile" alt="" src="../assests/profile-images/Ellipse -3.png" </td>
    <td>Altamash Bagwan</td>
    <td>Male</td>
    <td>
      <div class="dept-label">HR</div>
      <div class="dept-label">Engineer</div>
      <div class="dept-label">Finance</div>
    </td>
    <td>400000</td>
    <td>1 Nov 2090</td>
    <td>
      <img id="1" onclick="remove(this)" alt="delete" src="../assests/icons/delete-black-18dp.svg">
      <img id="1" alt="edit" onclick="update(this)" src="../assests/icons/create-black-18dp.svg">
    </td>
  </tr>
    `;
    document.querySelector("#table-display").innerHTML = innerHtml;
}