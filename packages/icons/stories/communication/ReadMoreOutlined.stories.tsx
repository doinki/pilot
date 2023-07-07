import type { Meta, StoryObj } from '@storybook/react';

import ReadMoreOutlined from '../../lib/communication/ReadMoreOutlined';

const meta: Meta<typeof ReadMoreOutlined> = {
  component: ReadMoreOutlined,
  tags: ['autodocs'],
  title: 'communication/ReadMoreOutlined',
};

export default meta;
type Story = StoryObj<typeof ReadMoreOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
