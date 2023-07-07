import type { Meta, StoryObj } from '@storybook/react';

import CatchingPokemonOutlined from '../../lib/social/CatchingPokemonOutlined';

const meta: Meta<typeof CatchingPokemonOutlined> = {
  component: CatchingPokemonOutlined,
  tags: ['autodocs'],
  title: 'social/CatchingPokemonOutlined',
};

export default meta;
type Story = StoryObj<typeof CatchingPokemonOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
