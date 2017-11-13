import React from 'react';
import MultiSelect from '@khanacademy/react-multi-select';

const StatefulMultiSelects = (props) => {
    const {selected, options} = props;
    let {handleChange} = props;
    if (typeof handleChange === 'undefined') {
        handleChange = (val) => {
            console.log('back up action ', val);
        }
    }
    return <div>
        <MultiSelect
            options={options}
            onSelectedChanged={handleChange}
            selected={selected}
        />
    </div>;
};

class StatefulMultiSelect extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: [],
        };
    }

    handleSelectedChanged(selected) {
        this.setState({selected});
        console.log(selected);
    }

    render() {
        const {
            ItemRenderer,
            options,
            selectAllLabel,
            valueRenderer,
            isLoading,
        } = this.props;
        const {selected} = this.state;

        return <div>
            <MultiSelect
                options={options}
                onSelectedChanged={this.handleSelectedChanged.bind(this)}
                selected={selected}
                valueRenderer={valueRenderer}
                ItemRenderer={ItemRenderer}
                selectAllLabel={selectAllLabel}
                isLoading={isLoading}
            />

            <h2>Selected:</h2>
            {selected.join(', ')}
        </div>;
    }
}

export {StatefulMultiSelect};