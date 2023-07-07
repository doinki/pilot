import type { Meta, StoryObj } from '@storybook/react';

import DifferenceOutlined from '../../lib/file/DifferenceOutlined';

const meta: Meta<typeof DifferenceOutlined> = {
  component: DifferenceOutlined,
  tags: ['autodocs'],
  title: 'file/DifferenceOutlined',
};

export default meta;
type Story = StoryObj<typeof DifferenceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
