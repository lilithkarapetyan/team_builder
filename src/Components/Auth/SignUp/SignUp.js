import React, { Component } from 'react';
import Form from '../Form'
import { Button } from '@material-ui/core'
import { getCompanies } from '../../../Fetch/Companies'
import { register } from '../../../Fetch/Users'


class SignUp extends Component {
    state = {
        fields: [
            { id: "email", title: "E-mail", type: "email" },
            { id: "password", title: "Password", type: "password" },
            { id: "firstName", title: "First Name", type: "text" },
            { id: "lastName", title: "Last name", type: "text" },
            { id: "birthDate", title: "Birth Date", type: "date" },
            { id: "sex", title: "Gender", type: "select", options: [{id: 'male', name:'male'}, {id:'female', name:'female'}] },
            { id: "avatarUrl", title: "Avatar Url", type: "text" },
            { id: "jsExperience", title: "JS Experience", type: "number" },
            { id: "reactExperience", title: "React Experience", type: "number" },
            { id: "companyId", title: "Company", type: "select", options: [] },
        ],
        user: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            birthDate: '2001-01-01',
            sex: "",
            avatarUrl: "",
            jsExperience: 0,
            reactExperience: 0,
            companyId: ""
        }
    }

    componentDidMount() {

        getCompanies().then((data) => {
            let i = this.state.fields.findIndex((item) => (
                item.id === 'companyId'
            ))

            const newFields = {
                fields: [
                    ...this.state.fields
                ]
            }

            newFields.fields[i] = {
                ...this.state.fields[i],
                options: data
            }

            this.setState(newFields)
        })
    }

    onChange = (field, value) => {
        this.setState({
            user: {
                ...this.state.user,
                [field]: value
            }
        })
    }
    
    onSignUp = () => {
        const user = {...this.state.user}
        user.jsExperience*=1;
        user.reactExperience*=1;
        register(user).then((data)=>{
            this.props.signedIn();
        })
    }

    render() {
        return (
            <div>
                <Form fields={this.state.fields} user={this.state.user} onChange={this.onChange}></Form>
                <Button variant="outlined" color="primary" onClick={this.onSignUp}>Sign Up</Button>
            </div>
        );
    }
}

export default SignUp;