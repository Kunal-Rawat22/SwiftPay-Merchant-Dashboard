export default async function DashboardIDPage({params, searchParams}) {
    const {dashboardID} = await params;
    const {type, mode} = await searchParams;
    return <><h1>Dashboard Page for ID: {dashboardID}</h1>
    <h2>Type: {type}</h2>
        <h2>Mode: {mode}</h2>
    </>;
}