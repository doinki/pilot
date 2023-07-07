import type { Meta, StoryObj } from '@storybook/react';

import AtmOutlined from '../../lib/maps/AtmOutlined';

const meta: Meta<typeof AtmOutlined> = {
  component: AtmOutlined,
  tags: ['autodocs'],
  title: 'maps/AtmOutlined',
};

export default meta;
type Story = StoryObj<typeof AtmOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
