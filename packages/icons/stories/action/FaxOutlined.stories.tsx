import type { Meta, StoryObj } from '@storybook/react';

import FaxOutlined from '../../lib/action/FaxOutlined';

const meta: Meta<typeof FaxOutlined> = {
  component: FaxOutlined,
  tags: ['autodocs'],
  title: 'action/FaxOutlined',
};

export default meta;
type Story = StoryObj<typeof FaxOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
