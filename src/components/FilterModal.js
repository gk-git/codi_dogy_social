import React from 'react';
import {Button, Modal} from "react-bootstrap";
import MultiSelect from '@khanacademy/react-multi-select';

import {gender_options, breed_options, origins_options} from '../utils/data'

const FilterModal = (props) => {
    const {filter, handleSubmitFilterModal, handleFilterModalCancel, handleFilterOriginEdit, container, locations} = props;
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
                            <MultiSelect
                                options={locations_options}
                                onSelectedChanged={(val) => {
                                    handleFilterOriginEdit(val, 'location')
                                }}
                                selected={filter.inputs.location || []}
                            />
                        </div>
                        <div className="col-sm-6">
                            <h4>Origin: </h4>

                            <MultiSelect
                                options={origins_options}
                                onSelectedChanged={(val) => {
                                    handleFilterOriginEdit(val, 'origin')
                                }}
                                selected={filter.inputs.origin || []}
                            />
                        </div>
                        <div className="col-sm-6">
                            <h4>Gender: </h4>

                            <MultiSelect
                                options={gender_options}
                                onSelectedChanged={(val) => {
                                    handleFilterOriginEdit(val, 'gender')
                                }}
                                selected={filter.inputs.gender || []}
                            />
                        </div>
                        <div className="col-sm-6">
                            <h4>Breed: </h4>

                            <MultiSelect
                                options={breed_options}
                                onSelectedChanged={(val) => {
                                    handleFilterOriginEdit(val, 'breed')
                                }}
                                selected={filter.inputs.breed || []}
                            />
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleFilterModalCancel}>Close</Button>
                    <Button bsStyle="primary" onClick={(event) => {
                        handleSubmitFilterModal()
                    }}>filter</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export {FilterModal};