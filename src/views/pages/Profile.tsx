import React from 'react';
import { useState, useMemo } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Space, Select } from 'antd';
import { Navigate } from "react-router-dom";
import { Button } from 'antd';
import { Col, Row } from 'antd';
import {
    red,
    volcano,
    orange,
    yellow,
    lime,
    green,
    cyan,
    blue,
    purple,
    magenta
} from '@ant-design/colors';
import countryList from 'react-select-country-list';
import "./../../styles/profilePage.css";

const { Option } = Select;

const ProfilePage = (): JSX.Element => {
    const colorsBunch: string[] = [
        red[5], 
        volcano[3], 
        orange[5],
        yellow[5],
        lime[5], 
        green[5],
        cyan[5],
        blue[9],
        purple[5],
        magenta[5]
    ]
    const [value, setValue] = useState<number>(1);
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const options = useMemo(() => countryList().getData(), [])

    if (localStorage.getItem("isAuth") !== "true") {
        return <Navigate replace={true} to='/login' />
    }

    const onChange = (e: RadioChangeEvent): void => {
        let formButton = document.getElementById("formButton")
        setValue(e.target.value);
        if (formButton !== null) {
            formButton.style.backgroundColor = e.target.value;
        }
    };

    const countrySet = (): void => {
        let countrySelect = document.getElementById("countrySelect");
        if (countrySelect !== null) {
            setIsDisabled(isDisabled => !isDisabled)
        }
    }
    
    return (
        <div id="profilePageBlock">
            <Select
                id="countrySelect"
                mode="multiple"
                style={{ width: '40%' }}
                placeholder="Страны"
                optionLabelProp="label"
                disabled={isDisabled}
            >
                { options.map(country => { return (
                    <Option value={country.value} label={country.label}>
                        <Space>
                            <span style={{ fontFamily: 'Trebuchet MS' }} role="img" aria-label={country.label}>
                            { country.label }
                            </span>
                            <p style={{ color: "rgb(227, 96, 73)" }}>{ country.value }</p>
                        </Space>
                    </Option>
                )})}
            </Select>
            <Button onClick={ countrySet } type="primary" style={{ backgroundColor: "royalblue"}} id="formButton">Выбрать страну</Button>
            <Radio.Group id="" onChange={onChange} value={value}>
                <Space id="radioChangeColorButton" direction="vertical">
                    <Row id="rowChangeColorButton" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={6}>
                            { colorsBunch.map(color => { return (
                            <Radio value={color}>
                                <div style={{ backgroundColor: color, width: "40px", height: "10px"}}></div>
                            </Radio>
                            )})}
                        </Col>
                    </Row>
                </Space>
            </Radio.Group>
        </div>
    );
};


export default ProfilePage;