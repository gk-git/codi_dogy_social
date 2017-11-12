import React from 'react';
import Select from "react-select";
import {origins_options, gender_options, breed_options} from '../utils/data'
import "react-select/dist/react-select.css";
import '../styles/EditProfilePage.css';

const EditProfilePage = (props) => {
    const {profileEdit, handleProfileEditChange, handleProfileEditSelectChange, handleProfilePicChange, handleProfileEditSubmit, locations} = props;
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
    const current_year = new Date().getFullYear();
    const birthDate = new Date(profileEdit.inputs.dateOfBirth);
    const selectedOrigin = origins_options.find(item => {
        return item.value === profileEdit.inputs.origin
    });
    const selectedGender = gender_options.find(item => {
        return item.value === profileEdit.inputs.gender
    });
    const selectedBreed = breed_options.find(item => {
        return item.value === profileEdit.inputs.breed
    });
    const selectedLocation = locations_options.find(item => {
        return item.value === profileEdit.inputs.location
    });
    return [
        <div key={1} className={'profile-image'}>
            <h4>Profile Image</h4>
            <div className="profile">
                <img src={profileEdit.inputs.profileImage} alt={'profile'}/>
            </div>

            <div className="change-profile-image">
                <form onSubmit={event => {
                    event.preventDefault();
                    alert(1)
                }}>
                    <div className="file-input-wrapper">
                        <button type={'submit'} className={'btn btn-info btn-file-input'}>Change profile image</button>
                        <input type="file" name="file" onChange={(event) => {
                            handleProfilePicChange(event)
                        }}/>
                    </div>
                </form>
            </div>
        </div>,
        <div key={2} className={'edit-profile'}>

            <form onSubmit={(event) => {
                event.preventDefault();
                handleProfileEditSubmit();
            }}>
                <h4>Name: </h4>
                <input type={'text'} defaultValue={profileEdit.inputs.name} disabled={true} className={'form-control'}/>
                <h4>Dog Name: </h4>
                <input type={'text'} defaultValue={profileEdit.inputs.dogName} disabled={false}
                       className={'form-control'}
                       onChange={event => {
                           event.preventDefault();
                           handleProfileEditChange(event);
                       }}/>
                <h4>General Description: </h4>
                <textarea defaultValue={profileEdit.inputs.personalData} rows="7" name={'personalData'}
                          className={'form-control'} onChange={event => {
                    event.preventDefault();
                    handleProfileEditChange(event);
                }}/>

                <h4>Origin: </h4>
                <Select
                    name="origin"
                    value={selectedOrigin}
                    options={origins_options}
                    onChange={(val) => {
                        handleProfileEditSelectChange(val, 'origin')
                    }}
                />
                <h4>Gender: </h4>
                <Select
                    name="gender"
                    value={selectedGender}
                    options={gender_options}
                    onChange={(val) => {
                        handleProfileEditSelectChange(val, 'gender')
                    }}
                />
                <h4>Breed: </h4>
                <Select
                    name="breed"
                    value={selectedBreed}
                    options={breed_options}
                    onChange={(val) => {
                        handleProfileEditSelectChange(val, 'breed')
                    }}
                />
                <h4>Location: </h4>
                <Select
                    name="location"
                    value={selectedLocation}
                    options={locations_options}
                    onChange={(val) => {
                        handleProfileEditSelectChange(val, 'location')
                    }}
                />
                <h4>Date Of Birth: </h4>
                <div className="date-of-birth">
                    <div className="date-month">
                        <select className="display-inline-block form-control" name={'month'}
                                onChange={event => {
                                    event.preventDefault();
                                    handleProfileEditChange(event);
                                }}
                                defaultValue={birthDate.getMonth()}>
                            <option value={1}>January</option>
                            <option value={2}>February</option>
                            <option value={3}>March</option>
                            <option value={4}>April</option>
                            <option value={5}>May</option>
                            <option value={6}>June</option>
                            <option value={7}>July</option>
                            <option value={8}>August</option>
                            <option value={9}>September</option>
                            <option value={10}>October</option>
                            <option value={11}>November</option>
                            <option value={12}>December</option>
                        </select>

                    </div>
                    <div className="day">
                        <select className="display-inline-block form-control" name={'day'}
                                onChange={event => {
                                    event.preventDefault();
                                    handleProfileEditChange(event);
                                }}
                                defaultValue={birthDate.getDay()}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                            <option value={23}>23</option>
                            <option value={24}>24</option>
                            <option value={25}>25</option>
                            <option value={26}>26</option>
                            <option value={27}>27</option>
                            <option value={28}>28</option>
                            <option value={29}>29</option>
                            <option value={30}>30</option>
                            <option value={31}>31</option>
                        </select>
                    </div>

                    <div className="year">
                        <select className="display-inline-block form-control" name={'year'}
                                onChange={event => {
                                    event.preventDefault();
                                    handleProfileEditChange(event);
                                }}
                                defaultValue={birthDate.getFullYear()}>
                            <option value={current_year}>{current_year}</option>
                            <option value={current_year - 1}>{current_year - 1}</option>
                            <option value={current_year - 2}>{current_year - 2}</option>
                            <option value={current_year - 3}>{current_year - 3}</option>
                            <option value={current_year - 4}>{current_year - 4}</option>
                            <option value={current_year - 5}>{current_year - 5}</option>
                            <option value={current_year - 6}>{current_year - 6}</option>
                            <option value={current_year - 7}>{current_year - 7}</option>
                            <option value={current_year - 8}>{current_year - 8}</option>
                            <option value={current_year - 9}>{current_year - 9}</option>
                            <option value={current_year - 10}>{current_year - 10}</option>
                            <option value={current_year - 11}>{current_year - 11}</option>
                            <option value={current_year - 12}>{current_year - 13}</option>
                        </select>
                    </div>

                </div>
                <button type={'submit'} className={'btn btn-block  btn-save'}>Save</button>
            </form>
        </div>,
    ]
}
export {EditProfilePage}