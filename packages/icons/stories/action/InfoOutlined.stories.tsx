import type { Meta, StoryObj } from '@storybook/react';

import InfoOutlined from '../../lib/action/InfoOutlined';

const meta: Meta<typeof InfoOutlined> = {
  component: InfoOutlined,
  tags: ['autodocs'],
  title: 'action/InfoOutlined',
};

export default meta;
type Story = StoryObj<typeof InfoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
