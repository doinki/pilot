import type { Meta, StoryObj } from '@storybook/react';

import GarageOutlined from '../../lib/search/GarageOutlined';

const meta: Meta<typeof GarageOutlined> = {
  component: GarageOutlined,
  tags: ['autodocs'],
  title: 'search/GarageOutlined',
};

export default meta;
type Story = StoryObj<typeof GarageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
