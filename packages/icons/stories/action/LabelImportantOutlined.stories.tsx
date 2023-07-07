import type { Meta, StoryObj } from '@storybook/react';

import LabelImportantOutlined from '../../lib/action/LabelImportantOutlined';

const meta: Meta<typeof LabelImportantOutlined> = {
  component: LabelImportantOutlined,
  tags: ['autodocs'],
  title: 'action/LabelImportantOutlined',
};

export default meta;
type Story = StoryObj<typeof LabelImportantOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
