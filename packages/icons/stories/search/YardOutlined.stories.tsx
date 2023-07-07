import type { Meta, StoryObj } from '@storybook/react';

import YardOutlined from '../../lib/search/YardOutlined';

const meta: Meta<typeof YardOutlined> = {
  component: YardOutlined,
  tags: ['autodocs'],
  title: 'search/YardOutlined',
};

export default meta;
type Story = StoryObj<typeof YardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
