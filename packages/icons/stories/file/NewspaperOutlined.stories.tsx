import type { Meta, StoryObj } from '@storybook/react';

import NewspaperOutlined from '../../lib/file/NewspaperOutlined';

const meta: Meta<typeof NewspaperOutlined> = {
  component: NewspaperOutlined,
  tags: ['autodocs'],
  title: 'file/NewspaperOutlined',
};

export default meta;
type Story = StoryObj<typeof NewspaperOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
