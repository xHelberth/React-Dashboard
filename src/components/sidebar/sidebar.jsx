import React from 'react';
class Sidebar extends React.Component {

  render() {
    return (
      <div id="sidebar" className={'app-sidebar '}>
        <div className="menu">
          <div class="mt-4">
            <h4><strong>Shipment Search</strong></h4>
          </div>
          <div class="mt-4">
            <h5><strong>Shipment Number</strong></h5>
            <textarea className="textarea"></textarea>
          </div>
          <div class="mt-3 ">
            <h5><strong>Status</strong></h5>
            <div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="autoTendered" id="autoTendered"></input>
                <label class="form-check-label" for="autoTendered">Auto Tendered</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="closed" id="closed"></input>
                <label class="form-check-label" for="closed">Closed</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="bol" id="bol"></input>
                <label class="form-check-label" for="bol">BOL</label>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <h5><strong>Ship Date</strong></h5>
            <input type="date" id="shipDate" name="shipDate"></input>
          </div>
          <div class="mt-4">
            <h5><strong>Created Date</strong></h5>
            <input type="date" id="createdDate" name="createdDate"></input>
          </div>
          <div class="mt-4">
            <h5><strong>Shipment Terms</strong></h5>
            <select name="terms" id="terms">
              <option value="term1">Shipment term 1</option>
              <option value="term1">Shipment term 2</option>
              <option value="term1">Shipment term 3</option>
              <option value="term1">Shipment term 4</option>
            </select>
          </div>
        </div>
      </div>

    )
  }
}

export default Sidebar;
