import type { Meta, StoryObj } from '@storybook/react';

import BedroomChildOutlined from '../../lib/search/BedroomChildOutlined';

const meta: Meta<typeof BedroomChildOutlined> = {
  component: BedroomChildOutlined,
  tags: ['autodocs'],
  title: 'search/BedroomChildOutlined',
};

export default meta;
type Story = StoryObj<typeof BedroomChildOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
