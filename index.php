<?php
/**
 * Plugin Name: Inpsyde
 * Description: The is test assign teask plugin that enable a custom url to show a data in grid fro an api
 * Version: 1.0.0
 */


class Inpsyde
{

    const URI_PARAM = 'inpsyde';

    public function action(string $hook, $func): void
    {
        add_action(
            $hook,
            $func,
        );
    }

    public function getTemplate( string $template ): string
    {
        return plugin_dir_path(__FILE__) . '/templates/' . $template . '.php';
    }

    /**
     *
     */
    public function init(): void
    {
        add_rewrite_rule(
            self::URI_PARAM,
            'index.php?' . self::URI_PARAM . '=true',
            'top'
        );
    }

    /**
     * @param array $variable
     */
    public function variables( array $variables): array
    {
        $variables[] = self::URI_PARAM;
        return $variables;
    }

    public function template( string $template ): string
    {
        if ( (bool) get_query_var( self::URI_PARAM ) !== true) {
            return $template;
        }

        return $this->getTemplate('index');
    }

    public function hook(): void
    {
        $this->action(
            'init',
            array($this, 'init')
        );

        $this->action(
            'query_vars',
            array($this, 'variables')
        );

        $this->action(
            'template_include',
            array($this, 'template')
        );
    }

    public static function main(): void
    {
        $inpsyde = new Inpsyde();
        $inpsyde->hook();
    }
}
Inpsyde::main();