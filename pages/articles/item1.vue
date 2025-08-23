<script setup='ts'>
import { advantages, code_block, table_method } from '~/data/item1'

definePageMeta({
    layout: 'item-default',
    title: 'Item 1: Consider Static Factory Methods Instead of Constructors'
})
</script>

<template>
    <div class="content-advandtage">
        <h2 class="text-xl font-bold">Advantages of static method over constructors.</h2>
        <div class="advandtage1">
            <p class="font-bold border-l-2 pl-2 my-5 bg-orange-300"> {{ advantages[0] }}</p>
            <div class="pl-5">
                <p><strong>Issue: Constructors</strong> with similar signatures cause confusion and increase the
                    risk of
                    incorrect usage.</p>
                <CodeBlock :code="code_block[0]" />
                <p><strong>Solution: Static factory methods</strong> use meaningful names, making the code
                    clearer and less error-prone.</p>
                <CodeBlock :code="code_block[1]" />
            </div>
        </div>

        <div class="advandtage2">
            <p class="font-bold border-l-2 pl-2 my-5 bg-orange-300">{{ advantages[1] }}</p>
            <div class="pl-5">
                <p><strong>Issue:</strong> Using <strong>constructors</strong> always creates a new object, even
                    when it’s
                    unnecessary. This can lead to performance issues, especially when creating expensive or
                    frequently used objects.</p>
                <p><strong>Example:</strong> Imagine a system where we frequently need <span
                        class="code-class">UserPermission</span> objects
                    representing basic user roles. Using constructors means a new object is created every time.
                </p>
                <CodeBlock :code="code_block[2]" />
                <p>Even though both objects represent <strong>ADMIN</strong>, they are separate instances,
                    leading to unnecessary memory usage.</p>
                <p><strong>Solution: A static factory method</strong> can return pre-constructed instances,
                    ensuring no duplicate objects are created.</p>
                <CodeBlock :code="code_block[3]" />
            </div>
        </div>

        <div class="advandtage3">
            <p class="font-bold border-l-2 pl-2 my-5 bg-orange-300">{{ advantages[2] }}</p>
            <div class="pl-5">
                <p><strong>Issue: Constructors</strong> can only return their own class type and expose
                    implementation details.</p>
                <p><strong>Example:</strong> In a payment processing system, instead of exposing specific
                    payment method implementations (CreditCard, PayPal, etc.), provide a <span
                        class="code-class">PaymentProcessor</span>
                    interface with factory methods that hide these details from clients.
                </p>
                <CodeBlock :code="code_block[4]" />
                <p><strong>Solution: Static factory methods</strong> in interfaces can return any subtype of
                    their type while hiding implementation details, allowing clients to work only with the
                    interface.</p>
                <CodeBlock :code="code_block[5]" />
            </div>
        </div>

        <div class="advandtage4">
            <p class="font-bold border-l-2 pl-2 my-5 bg-orange-300">{{ advantages[3] }}</p>
            <div class="pl-5">
                <p><strong>Issue:</strong> When using constructors, you are forced to return an instance of the
                    exact class being instantiated.</p>
                <p><strong>Solution:</strong> A static factory method allows returning any subtype of the
                    declared return type based on the input parameters. This provides flexibility, better
                    performance, and maintainability.
                </p>
                <p><strong>Example: EnumSet in Java</strong></p>
                <p>The EnumSet class in Java does not have public constructors. Instead, it provides static
                    factory methods (EnumSet.of(), EnumSet.allOf(), etc.), which return different internal
                    implementations based on the enum size.</p>
                <strong>How it Works:</strong>
                <ul class="list-disc">
                    <li>If the enum type has 64 or fewer elements, EnumSet.of() returns a RegularEnumSet, which
                        is backed by a single long (efficient memory usage).</li>
                    <li>If the enum has 65 or more elements, it returns a JumboEnumSet, backed by a long array
                        (to accommodate larger sizes).</li>
                    <li>The user never knows or cares which implementation is used; they only interact with
                        EnumSet.</li>
                    <li>In the future, Java can replace or add new implementations without breaking existing
                        code.</li>
                </ul>
                <CodeBlock :code="code_block[6]" />
            </div>
        </div>
    </div>

    <div class="content-disadvandtage">
        <h2 class="text-xl font-bold">Disadvantages of static method over constructors.</h2>
        <p>One of the main drawbacks of using static factory methods is that a class without a public or
            protected constructor cannot be subclassed.</p>
        <p><strong>Example: Preventing Subclassing with Static Factory Methods</strong></p>
        <div class="advandtage1">
            Let’s say we have a Vehicle class that we want to control the instantiation of, using static factory
            methods.
            <div class="pl-5">
                <p class="font-bold border-l-2 pl-2 my-5 bg-orange-300"> 1.Defining a Class with Private
                    Constructor</p>
                <p>Here, the constructor is private, so the only way to create a Vehicle is through its static
                    factory methods createCar() and createBike().</p>
                <CodeBlock :code="code_block[7]" />

                <p class="font-bold border-l-2 pl-2 my-5 bg-orange-300"> 2.Attempting to Subclass Vehicle</p>
                <p>If someone tries to create a subclass, it will fail to compile.</p>
                <CodeBlock :code="code_block[8]" />
            </div>
        </div>
    </div>
    <p><strong>Suggestion:</strong></p>
    <p>As a best practice, evaluate the use of static factory methods before implementing public constructors.
        While both approaches are valid and have their use cases, static factory methods frequently offer
        advantages that make them the preferable choice for object creation.</p>

    <div class="mt-3">
        <h2 class="text-xl font-bold mb-3">Some common static factory methods.
        </h2>
        <table class="table-auto border-collapse border border-gray-400">
            <thead>
                <tr>
                    <th class="p-2 border border-gray-300">Naming Convention</th>
                    <th class="p-2 border border-gray-300">Purpose</th>
                    <th class="p-2 border border-gray-300">Example</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(method, idx) in table_method" :key="idx">
                    <td class="p-2 border border-gray-300">{{ method.name }}</td>
                    <td class="p-2 border border-gray-300">{{ method.purpose }}</td>
                    <td class="p-2 border border-gray-300">{{ method.ex }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped></style>