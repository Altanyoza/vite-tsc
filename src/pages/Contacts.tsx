import React, { PureComponent } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Text from '../components/Text'

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface ContactsState {
    formData: FormData;
}

class Contacts extends PureComponent<{}, ContactsState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            formData: {
                name: '',
                email: '',
                phone: '',
                message: ''
            }
        }
    }

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }))
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Форма отправлена:', this.state.formData)
        // Здесь можно добавить логику отправки формы
    }

    render() {
        const { formData } = this.state
        
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
                        <Text size="xl" bold className="mb-2">Свяжитесь с нами</Text>
                        <Text color="secondary" className="mb-8">Заполните форму, и мы ответим вам в ближайшее время</Text>

                        <form onSubmit={this.handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 text-sm font-medium mb-2">
                                        Ваше имя
                                    </label>
                                    <Input 
                                        name="name"
                                        type="text" 
                                        placeholder="Протодьяконова Алтанай" 
                                        size="md" 
                                        variant="outline"
                                        className="w-full"
                                        value={formData.name}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <Input 
                                        name="email"
                                        type="email" 
                                        placeholder="altanyoza@gmail.com" 
                                        size="md" 
                                        variant="outline"
                                        className="w-full"
                                        value={formData.email}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Телефон
                                </label>
                                <Input 
                                    name="phone"
                                    type="tel" 
                                    placeholder="+7 (XXX) XXX-XX-XX" 
                                    size="md" 
                                    variant="outline"
                                    className="w-full"
                                    value={formData.phone}
                                    onChange={this.handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Ваше сообщение
                                </label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent min-h-[120px]"
                                    placeholder="Напишите ваше сообщение здесь..."
                                    value={formData.message}
                                    onChange={this.handleInputChange}
                                ></textarea>
                            </div>

                            <Button 
                            type="submit"
                            color="primary"
                            size="large"
                            title="Отправить сообщение"
                            className="w-full"
                            onClick={this.handleSubmit}
                            />
                        </form>

                        <div className="mt-10 pt-6 border-t border-gray-200">
                            <Text size="lg" bold className="mb-4">Контакты</Text>
                            <div className="space-y-2">
                                <Text>Телефон: +7 (914) 220-92-79</Text>
                                <Text>Email: zdsupport@mail.ru</Text>
                                <Text>Адрес: г. Якутск, ул. Якутские ножи, 12 офис 112</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts