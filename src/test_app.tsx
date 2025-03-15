
interface MyButtonProps {
title: string;
disabled: boolean;
}


// function MyButton ({title}: {title:string}) {
    function MyButton ({title, disabled}: MyButtonProps) {
return (<button disabled={true}>{title}</button>);
};

export default function MyApp () {
    return (
        <div>
            <h1>Welcome</h1>
            <MyButton title="I am a button" disabled/>
        </div>
    );
};
