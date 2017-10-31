import React from 'react';
import Select from "react-select";
import "react-select/dist/react-select.css";
import '../styles/EditProfilePage.css';


const logChange = val => {
    console.log("Selected: ", val);
};


const origins_options = [
    {value: "AFGHANISTAN", label: "AFGHANISTAN"},
    {value: "ANATOLIA", label: "ANATOLIA"},
    {value: "ARGENTINA", label: "ARGENTINA"},
    {value: "AUSTRALIA", label: "AUSTRALIA"},
    {value: "AUSTRIA", label: "AUSTRIA"},
    {value: "BELGIUM", label: "BELGIUM"},
    {value: "BELGIUM, FRANCE", label: "BELGIUM, FRANCE"},
    {value: "BOSNIA", label: "BOSNIA"},
    {value: "AND", label: "AND"},
    {value: "HERZEGOVINA", label: "HERZEGOVINA"},
    {value: "BOSNIA", label: "BOSNIA"},
    {value: "AND", label: "AND"},
    {value: "HERZEGOVINA, CROATIA", label: "HERZEGOVINA, CROATIA"},
    {value: "BRAZIL", label: "BRAZIL"},
    {value: "CANADA", label: "CANADA"},
    {value: "CENTRAL", label: "CENTRAL"},
    {value: "AFRICA", label: "AFRICA"},
    {value: "CENTRAL", label: "CENTRAL"},
    {value: "MEDITERRANEAN", label: "MEDITERRANEAN"},
    {value: "BASIN", label: "BASIN"},
    {value: "CHINA", label: "CHINA"},
    {value: "CROATIA", label: "CROATIA"},
    {value: "CZECH", label: "CZECH"},
    {value: "REPUBLIC", label: "REPUBLIC"},
    {value: "DENMARK", label: "DENMARK"},
    {value: "DENMARK, SWEDEN", label: "DENMARK, SWEDEN"},
    {value: "ENGLAND", label: "ENGLAND"},
    {value: "FINLAND", label: "FINLAND"},
    {value: "FRANCE", label: "FRANCE"},
    {value: "GERMANY", label: "GERMANY"},
    {value: "GERMANY, SWITZERLAND", label: "GERMANY, SWITZERLAND"},
    {value: "GREAT", label: "GREAT"},
    {value: "BRITAIN", label: "BRITAIN"},
    {value: "GREECE", label: "GREECE"},
    {value: "GREENLAND", label: "GREENLAND"},
    {value: "HUNGARY", label: "HUNGARY"},
    {value: "ICELAND", label: "ICELAND"},
    {value: "IRELAND", label: "IRELAND"},
    {value: "ISRAEL", label: "ISRAEL"},
    {value: "ITALY", label: "ITALY"},
    {value: "JAPAN", label: "JAPAN"},
    {value: "MACEDONIA, SERBIA", label: "MACEDONIA, SERBIA"},
    {value: "MADAGASCAR", label: "MADAGASCAR"},
    {value: "MALI", label: "MALI"},
    {value: "MALTA", label: "MALTA"},
    {value: "MEXICO", label: "MEXICO"},
    {value: "MIDDLE", label: "MIDDLE"},
    {value: "EAST", label: "EAST"},
    {value: "MONTENEGRO", label: "MONTENEGRO"},
    {value: "MOROCCO", label: "MOROCCO"},
    {value: "NORTHERN", label: "NORTHERN"},
    {value: "RUSSIA, SIBERIA", label: "RUSSIA, SIBERIA"},
    {value: "NORWAY", label: "NORWAY"},
    {value: "PERU", label: "PERU"},
    {value: "POLAND", label: "POLAND"},
    {value: "PORTUGAL", label: "PORTUGAL"},
    {value: "REPUBLIC", label: "REPUBLIC"},
    {value: "OF", label: "OF"},
    {value: "KOREA", label: "KOREA"},
    {value: "ROMANIA", label: "ROMANIA"},
    {value: "RUSSIA", label: "RUSSIA"},
    {value: "SERBIA", label: "SERBIA"},
    {value: "SLOVAKIA", label: "SLOVAKIA"},
    {value: "SLOVENIA", label: "SLOVENIA"},
    {value: "SOUTH", label: "SOUTH"},
    {value: "AFRICA", label: "AFRICA"},
    {value: "SOUTH - EASTERN", label: "SOUTH - EASTERN"},
    {value: "EUROPE", label: "EUROPE"},
    {value: "SPAIN", label: "SPAIN"},
    {value: "SWEDEN", label: "SWEDEN"},
    {value: "SWITZERLAND", label: "SWITZERLAND"},
    {value: "TAIWAN", label: "TAIWAN"},
    {value: "THAILAND", label: "THAILAND"},
    {value: "THE", label: "THE"},
    {value: "NETHERLANDS", label: "NETHERLANDS"},
    {value: "Tibet(China)", label: "Tibet(China)"},
    {value: "UNITED", label: "UNITED"},
    {value: "STATES", label: "STATES"},
    {value: "OF", label: "OF"},
    {value: "AMERICA", label: "AMERICA"},
    {value: "URUGUAY", label: "URUGUAY"},
    {value: "WESTERN", label: "WESTERN"},
    {value: "MEDITERRANEAN", label: "MEDITERRANEAN"},
    {value: "BASIN", label: ["BASIN", "BASIN"]}
];
const genre_options = [
    {value: "male", label: 'Male'},
    {value: "female", label: 'Female'},

]
class EditProfilePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        const {children, name, general_description, origin} = props;

        this.state = {
            children,
            name,
            general_description,
            origin: origins_options[0]
        };
        this.handleOriginChange = this.handleOriginChange.bind(this);
    }

    handleOriginChange(val) {
        console.log(val);
        this.setState({...this.state, origin: val})
    }

    render() {

        console.log(this.state.origin);

        return (
            <div className={'edit-profile'}>
                <h4>Name: </h4>
                <input type={'text'} defaultValue={this.state.name} className={'form-control'}/>
                <h4>General Description: </h4>
                <textarea defaultValue={this.state.general_description} rows="7" className={'form-control'}/>
                <h4>Origin: </h4>

                <Select
                    name="form-field-name"
                    value={this.state.origin.value}
                    //value='BASIN'
                    options={origins_options}
                    onChange={(val) => {
                        this.handleOriginChange(val)
                    }}
                />
                <h4>Gender: </h4>

                <Select
                    name="form-field-name"
                    value={this.state.origin.value}
                    //value='BASIN'
                    options={genre_options}
                    onChange={(val) => {
                        this.handleOriginChange(val)
                    }}
                />
            </div>
        )
    }
}

export {EditProfilePage}