import type { Meta, StoryObj } from '@storybook/react';

import BusinessCenterOutlined from '../../lib/places/BusinessCenterOutlined';

const meta: Meta<typeof BusinessCenterOutlined> = {
  component: BusinessCenterOutlined,
  tags: ['autodocs'],
  title: 'places/BusinessCenterOutlined',
};

export default meta;
type Story = StoryObj<typeof BusinessCenterOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
