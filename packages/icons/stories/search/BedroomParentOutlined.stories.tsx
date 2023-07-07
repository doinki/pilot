import type { Meta, StoryObj } from '@storybook/react';

import BedroomParentOutlined from '../../lib/search/BedroomParentOutlined';

const meta: Meta<typeof BedroomParentOutlined> = {
  component: BedroomParentOutlined,
  tags: ['autodocs'],
  title: 'search/BedroomParentOutlined',
};

export default meta;
type Story = StoryObj<typeof BedroomParentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
