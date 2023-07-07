import type { Meta, StoryObj } from '@storybook/react';

import DeselectOutlined from '../../lib/content/DeselectOutlined';

const meta: Meta<typeof DeselectOutlined> = {
  component: DeselectOutlined,
  tags: ['autodocs'],
  title: 'content/DeselectOutlined',
};

export default meta;
type Story = StoryObj<typeof DeselectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
