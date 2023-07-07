import type { Meta, StoryObj } from '@storybook/react';

import VaccinesOutlined from '../../lib/social/VaccinesOutlined';

const meta: Meta<typeof VaccinesOutlined> = {
  component: VaccinesOutlined,
  tags: ['autodocs'],
  title: 'social/VaccinesOutlined',
};

export default meta;
type Story = StoryObj<typeof VaccinesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
