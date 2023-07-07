import type { Meta, StoryObj } from '@storybook/react';

import ImportContactsOutlined from '../../lib/communication/ImportContactsOutlined';

const meta: Meta<typeof ImportContactsOutlined> = {
  component: ImportContactsOutlined,
  tags: ['autodocs'],
  title: 'communication/ImportContactsOutlined',
};

export default meta;
type Story = StoryObj<typeof ImportContactsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
