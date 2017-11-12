import React from 'react';
import {Button, Modal} from "react-bootstrap";
import Select from "react-select";

const FilterModal = (props) => {
    const {filter, handleFilterModalCancel, container, locations} = props;
    let locations_options = [];
    for (let key in locations) {
        // skip loop if the property is from prototype
        if (!locations.hasOwnProperty(key)) continue;

        let obj = locations[key];
        locations_options.push({value: obj._id, label: obj.label})
    }
    locations_options.sort((a, b) => {
        if (a.label < b.label)
            return -1;
        if (a.label > b.label)
            return 1;
        return 0;
    });
    return (
        <div className="filter-modal">
            <Modal
                show={filter.show}
                onHide={handleFilterModalCancel}
                container={container}
                aria-labelledby="contained-modal-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>Location: </h4>
                            <Select
                                name="location"
                                value={filter.location}
                                options={locations_options}
                                onChange={(val) => {
                                    // handleProfileEditSelectChange(val, 'location')
                                    console.log(val);
                                }}
                            />
                        </div>
                        <div className="col-sm-6">
                            <h4>Origin: </h4>
                            <Select
                                name="location"
                                value={filter.location}
                                options={locations_options}
                                onChange={(val) => {
                                    // handleProfileEditSelectChange(val, 'location')
                                    console.log(val);
                                }}
                            />
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleFilterModalCancel}>Close</Button>
                    <Button bsStyle="primary">filter</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export {FilterModal};