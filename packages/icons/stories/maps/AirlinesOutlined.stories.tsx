import type { Meta, StoryObj } from '@storybook/react';

import AirlinesOutlined from '../../lib/maps/AirlinesOutlined';

const meta: Meta<typeof AirlinesOutlined> = {
  component: AirlinesOutlined,
  tags: ['autodocs'],
  title: 'maps/AirlinesOutlined',
};

export default meta;
type Story = StoryObj<typeof AirlinesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
