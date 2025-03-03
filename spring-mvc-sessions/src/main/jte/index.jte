@param java.util.List<dev.danvega.conference.session.Session> sessions

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Session List</title>
</head>
<body class="max-w-6xl mx-auto">

<h1 class="text-3xl font-bold mt-8 mb-8">
    DevNexus 2025 Sessions
</h1>

<div class="">
    <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead>
                    <tr>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                    </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                    @for(var s : sessions)
                        <tr class="${s.title().contains("Workshop") ? "bg-green-100" : ""}">
                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                ${s.title()}
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                ${s.getSpeakersAsString()}
                            </td>
                        </tr>
                    @endfor
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

</body>
</html>