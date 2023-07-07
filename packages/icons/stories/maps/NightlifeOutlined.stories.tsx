import type { Meta, StoryObj } from '@storybook/react';

import NightlifeOutlined from '../../lib/maps/NightlifeOutlined';

const meta: Meta<typeof NightlifeOutlined> = {
  component: NightlifeOutlined,
  tags: ['autodocs'],
  title: 'maps/NightlifeOutlined',
};

export default meta;
type Story = StoryObj<typeof NightlifeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
