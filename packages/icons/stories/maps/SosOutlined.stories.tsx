import type { Meta, StoryObj } from '@storybook/react';

import SosOutlined from '../../lib/maps/SosOutlined';

const meta: Meta<typeof SosOutlined> = {
  component: SosOutlined,
  tags: ['autodocs'],
  title: 'maps/SosOutlined',
};

export default meta;
type Story = StoryObj<typeof SosOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
