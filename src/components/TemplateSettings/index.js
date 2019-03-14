import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input} from 'reactstrap';

const TemplateSettings = ({selected, templates, handleChange}) => (
    <FormGroup>
        <Label for="select">Select Card layout</Label>
        <Input
            type="select"
            name="select"
            id="select"
            value={selected}
            onChange={(event) => handleChange(event.target.value)}
        >
            {templates.map((template, index) => <option key={template.id} value={index}>Type {index + 1}</option>)}
        </Input>
    </FormGroup>
);

TemplateSettings.propTypes = {
    selected: PropTypes.number,
    templates: PropTypes.array,
    handleChange: PropTypes.func,
};

export default TemplateSettings;