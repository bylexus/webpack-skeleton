import $ from 'jquery';
import foo from './foo_module';

$('#btn').on('click', e => {
    alert("Hello from jQuery");
    foo();
});

