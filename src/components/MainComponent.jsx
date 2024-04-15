import CreateCVForm from "./CreateCVForm"

const MainComponent = () => {
    const handleCreateCv = () => {
        console.log('create CV')
    }

    return (
        <CreateCVForm onCreate={handleCreateCv} />
    )
}

export default MainComponent