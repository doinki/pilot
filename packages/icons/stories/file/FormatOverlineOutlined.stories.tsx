import type { Meta, StoryObj } from '@storybook/react';

import FormatOverlineOutlined from '../../lib/file/FormatOverlineOutlined';

const meta: Meta<typeof FormatOverlineOutlined> = {
  component: FormatOverlineOutlined,
  tags: ['autodocs'],
  title: 'file/FormatOverlineOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatOverlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
