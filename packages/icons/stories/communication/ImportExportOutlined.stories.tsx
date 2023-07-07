import type { Meta, StoryObj } from '@storybook/react';

import ImportExportOutlined from '../../lib/communication/ImportExportOutlined';

const meta: Meta<typeof ImportExportOutlined> = {
  component: ImportExportOutlined,
  tags: ['autodocs'],
  title: 'communication/ImportExportOutlined',
};

export default meta;
type Story = StoryObj<typeof ImportExportOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
